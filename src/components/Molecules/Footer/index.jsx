import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Logo, Button, Input } from "../../Atoms";
import { IoIosPaperPlane } from "react-icons/io";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Footer({ setSearch, setStateMovies, movies }) {
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.com+)*$/;
  const [email, setEmail] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const subcribeNewsLetter = (e) => {
    if (!regexEmail.test(email)) {
      e.preventDefault();
      Swal.fire("Format email tidak sesuai");
    }
  };

  return (
    <footer className="p-4 bg-black sm:p-6 ">
      <div className="flex flex-row  justify-between">
        <div className="mb-6 md:mb-0 w-36">
          <Logo
            onClick={() => {
              setSearch("");
              setStateMovies(movies);
            }}
          />
        </div>
        <div>
          <div className="lg:ml-6">
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Subcribe Newsletter
            </h2>
            <form className="flex">
              <Input
                className=" w-full rounded-l-lg text-black border p-1.5"
                placeholder="Email Address"
                onChange={onChangeEmail}
              />
              <Button
                className="text-white bg-[#e50914] rounded-r-lg px-3 hover:bg-secondary-orange "
                onClick={subcribeNewsLetter}
              >
                <IoIosPaperPlane />
              </Button>
            </form>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-900 sm:mx-auto  lg:my-7" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center ">
          © 2022 Hackflix Final Project 4 - Group 14.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <AiFillInstagram size={20} className="text-white hover:text-red" />
          <AiFillGithub size={20} className="text-white hover:text-red" />
          <AiFillTwitterCircle
            size={20}
            className="text-white hover:text-red"
          />
        </div>
      </div>
    </footer>
  );
}
