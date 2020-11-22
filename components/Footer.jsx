import Header from "../components/Header";
function Footer() {
  return (
    <section id="contact" className="text-gray-700 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Μιχάλης Βελέντζας &ie=UTF8&t=&z=20&iwloc=B&output=embed"
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Επικοινωνία
          </h2>
          <div>Διεύθυνση: Κυπαρρισίας 10, Αιγάλεω 12244</div>
          <div>Τηλ: 2105980383</div>
          <div>Email:</div>
          <br></br>
          <br></br>
          <div>Στείλε μήνυμα τώρα</div>
          <input
            className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
            placeholder="Message"
            defaultValue={""}
          />
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Αποστολή
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
