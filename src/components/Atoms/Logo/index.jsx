import Button from "../Button";

export default function Logo({ onClick }) {
  return (
    <Button onClick={onClick}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/upload-113c4.appspot.com/o/Logo.png?alt=media&token=ac446f19-e25e-45b4-9f66-d1fb4b064fbe"
        alt="logo"
      />
    </Button>
  );
}
