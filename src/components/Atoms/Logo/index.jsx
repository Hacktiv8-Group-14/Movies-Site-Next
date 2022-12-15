import Link from "next/link";
import Button from "../Button";

export default function Logo({ onClick }) {
  return (
    <Button onClick={onClick}>
      <h1 className="text-3xl text-[#e50914] font-extrabold mb-2 md:mb-0">
        FinProH8
      </h1>
    </Button>
  );
}
