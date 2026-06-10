import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Plus, Trash2, CheckCircle } from 'lucide-react';
import { Input } from '../CommonComponent/Input';
import { NumericInput } from '../CommonComponent/NumericInput';

interface Partner {
  id: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  mobileno: string;
}

interface Step1Props {
  initialData: any;
  onNext: (data: any) => void;
}

export default function StepUserRegistration({ initialData, onNext }: Step1Props) {
  const [formData, setFormData] = useState({
    registrationType: initialData.registrationType || 'solo',
    firstname: initialData.firstname || '',
    middlename: initialData.middlename || '',
    lastname: initialData.lastname || '',
    email: initialData.email || '',
    mobileno: initialData.mobileno || '',
  });

  const [partners, setPartners] = useState<Partner[]>(
    initialData.partners && initialData.partners.length > 0
      ? initialData.partners
      : [getEmptyPartner()]
  );

  // Helper to generate a clean slate partner model
  function getEmptyPartner(): Partner {
    return {
      id: crypto.randomUUID(),
      firstname: '',
      middlename: '',
      lastname: '',
      email: '',
      mobileno: '',
    };
  }

  // FIXED: Erases state completely depending on which type the user switches to
  const handleTypeChange = (type: 'solo' | 'partnership') => {
    if (type === 'solo') {
      // Clear all partners back to default empty state
      setPartners([getEmptyPartner()]);
      setFormData({
        registrationType: 'solo',
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        mobileno: '',
      });
    } else {
      // Reset solo data structures back to default empty state
      setFormData({
        registrationType: 'partnership',
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        mobileno: '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDirectFormChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handlePartnerChange = (id: string, field: keyof Partner, value: string) => {
    setPartners(
      partners.map((partner) =>
        partner.id === id ? { ...partner, [field]: value } : partner
      )
    );
  };

  const addPartner = () => {
    setPartners([...partners, getEmptyPartner()]);
  };

  const removePartner = (id: string) => {
    if (partners.length > 1) {
      setPartners(partners.filter((partner) => partner.id !== id));
    }
  };

  // FIXED: Destructures input states seamlessly without cross-polluting payloads
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  let ownersArray = [];

  if (formData.registrationType === 'solo') {
    // Treat the solo owner as the first and only item in the array
    ownersArray = [{
      firstname: formData.firstname,
      middlename: formData.middlename,
      lastname: formData.lastname,
      email: formData.email,
      mobileno: formData.mobileno,
    }];
  } else {
    // Strip out the local UI 'id' keys from your partners state
    ownersArray = partners.map(({ id, ...rest }) => rest);
  }

  const finalPayload = {
    registrationType: formData.registrationType,
    owners: ownersArray // Always an array!
  };
  onNext(finalPayload); 
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-5xl mx-auto p-6 md:p-8 rounded-xl shadow-md border space-y-8"
      style={{ backgroundColor: '#FDFBF7', borderColor: '#C19A6B' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-4" style={{ borderColor: '#C19A6B' }}>
        <User className="w-6 h-6" style={{ color: '#6B1D2F' }} />
        <h3 className="text-2xl font-bold tracking-tight" style={{ color: '#6B1D2F' }}>
          User Registration
        </h3>
      </div>

      {/* Registration Type Selection */}
      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
          Registration Type
        </h4>
        
        <div className="grid grid-cols-2 gap-4 p-1 bg-gray-100 rounded-xl" style={{ border: '1px solid #e5e7eb' }}>
          {/* Solo Ownership Option */}
          <button
            type="button"
            onClick={() => handleTypeChange('solo')} // Updated handler
            className={`flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
              formData.registrationType === 'solo'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
            style={formData.registrationType === 'solo' ? { border: '1px solid #C19A6B' } : {}}
          >
            <User className={`w-5 h-5 ${formData.registrationType === 'solo' ? 'text-[#C19A6B]' : 'text-gray-400'}`} />
            <span>Solo Ownership</span>
          </button>

          {/* Partnership Option */}
          <button
            type="button"
            onClick={() => handleTypeChange('partnership')} // Updated handler
            className={`flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
              formData.registrationType === 'partnership'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
            style={formData.registrationType === 'partnership' ? { border: '1px solid #C19A6B' } : {}}
          >
            <Users className={`w-5 h-5 ${formData.registrationType === 'partnership' ? 'text-[#C19A6B]' : 'text-gray-400'}`} />
            <span>Partnership</span>
          </button>
        </div>
      </div>

      {/* Mode A: Solo Proprietary View */}
      <AnimatePresence mode="wait">
        {formData.registrationType === 'solo' && (
          <motion.div
            key="solo-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Proprietary Owner Details
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="First Name" name="firstname" value={formData.firstname} onChange={handleChange} required />
              <Input label="Middle Name" name="middlename" value={formData.middlename} onChange={handleChange} />
              <Input label="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
              <NumericInput 
                label="Mobile Number" 
                name="mobileno" 
                value={formData.mobileno} 
                onChange={(val) => handleDirectFormChange('mobileno', val)} 
                maxLength={10}
                required 
              />
            </div>
          </motion.div>
        )}

        {/* Mode B: Partnership View */}
        {formData.registrationType === 'partnership' && (
          <motion.div
            key="partnership-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: '#C19A6B' }}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                <Users className="w-4 h-4" /> Partner Information Registry
              </h4>
              <button
                type="button"
                onClick={addPartner}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border text-white transition-all transform hover:scale-[1.02]"
                style={{ backgroundColor: '#6B1D2F', borderColor: '#6B1D2F' }}
              >
                <Plus className="w-4 h-4" /> Add New Partner
              </button>
            </div>

            <div className="space-y-8 divide-y divide-dashed divide-gray-300">
              <AnimatePresence initial={false}>
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`space-y-6 ${index > 0 ? 'pt-8' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold" style={{ color: '#6B1D2F' }}>
                        Partner #{index + 1} Profile
                      </span>
                      {partners.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removePartner(partner.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Remove Partner
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input 
                        label="First Name" 
                        name={`partner-firstName-${partner.id}`}
                        value={partner.firstname}
                        onChange={(e) => handlePartnerChange(partner.id, 'firstname', e.target.value)}
                        required
                      />
                      <Input 
                        label="Middle Name" 
                        name={`partner-middleName-${partner.id}`}
                        value={partner.middlename}
                        onChange={(e) => handlePartnerChange(partner.id, 'middlename', e.target.value)}
                      />
                      <Input 
                        label="Last Name" 
                        name={`partner-lastName-${partner.id}`}
                        value={partner.lastname}
                        onChange={(e) => handlePartnerChange(partner.id, 'lastname', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        label="Email Address" 
                        type="email"
                        name={`partner-email-${partner.id}`}
                        value={partner.email}
                        onChange={(e) => handlePartnerChange(partner.id, 'email', e.target.value)}
                        required
                      />
                      <NumericInput 
                        label="Mobile Number" 
                        name={`partner-mobile-${partner.id}`}
                        value={partner.mobileno}
                        onChange={(val) => handlePartnerChange(partner.id, 'mobileno', val)}
                        maxLength={10}
                        required
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions Footer */}
      <div className="flex justify-end pt-4 border-t" style={{ borderColor: '#C19A6B' }}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="flex items-center gap-2 px-6 py-2.5 rounded-md font-semibold text-white shadow transition-colors duration-150"
          style={{ backgroundColor: '#6B1D2F' }}
        >
          <CheckCircle className="w-4 h-4" />
          Save & Next
        </motion.button>
      </div>
    </form>
  );
}