
export interface OnboardingStepProps {
  sellerId: number | null;
  sellerName: string;
  onNext: (id?: number, name?: string) => void;
  onBack: () => void;
}