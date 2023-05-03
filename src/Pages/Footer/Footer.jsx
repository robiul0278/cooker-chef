import React from "react";

const Footer = () => {
  return (
    <section className="mt-14 bg-neutral text-neutral-content">
      <footer className="grid md:grid-cols-4 container mx-auto footer p-10">
      <div className="md:mr-10" >
          <h2 className=" font-bold text-4xl">COOKER_TEN</h2>
          <p>
           Chef Academy London was founded in 2007 and since then has led the way for professional training for head chefs, pastry chefs and restaurant managers. Book an appointment with one of our expert advisors for more information.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
