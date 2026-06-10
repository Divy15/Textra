-- This is an empty migration.

CREATE OR REPLACE FUNCTION onboarding_store_business_owner_details(
    in_uuid CHARACTER VARYING,
    in_registration_type CHARACTER VARYING,
    in_owner_list JSONB
)
RETURNS VOID
LANGUAGE 'plpgsql'
SECURITY DEFINER

AS $$
BEGIN

    -- 1. Store generated business UUID
    INSERT INTO business_uuid (uuid, business_type, is_form_completed, is_verified)
    VALUES (in_uuid::UUID, in_registration_type, false, false);

    -- 2. Store all related owners from the JSONB array
    INSERT INTO business_owner (uuid, firstname, middlename, lastname, email, mobile)
    SELECT 
        in_uuid::UUID,
        x.firstname,   
        x.middlename,   -- Reading from JSON input
        x.lastname,
        x.email,
        x.mobileno
    FROM jsonb_to_recordset(in_owner_list) AS x(
        firstname CHARACTER VARYING,
        middlename CHARACTER VARYING,
        lastname CHARACTER VARYING,
        email CHARACTER VARYING,
        mobileno CHARACTER VARYING
    );

END;
$$;