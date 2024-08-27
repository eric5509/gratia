import { Html, Button } from "@react-email/components";


type Props = {
    name:  string
    phone:  string
    email:  string
    address:  string
    city:  string
    state:  string
    serviceType:  string
    facilityType:  string
    cleaningFrequency:  string
}

export const Email = ({
  name,
  phone,
  email,
  address,
  city,
  state,
  serviceType,
  facilityType,
  cleaningFrequency,
}: Props) => {
  return (
    <Html lang="en" dir="ltr">
      <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
    </Html>
  );
};
