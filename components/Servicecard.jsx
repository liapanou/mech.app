function Servicecard() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex  px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://autoplanet.gr/img/cms/%CE%91%CE%A1%CE%98%CE%A1%CE%91/home-katsioupis-car.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Service
            </h1>
            <a href="/id" className="hover:text-red-700 ">
              Γενικό service
            </a>
            <br />
            <a href="/id" className="hover:text-red-700 ">
              {" "}
              Air Condition
            </a>
            <br />
            <div href="/id" className="hover:text-red-700 ">
              Διάγνωση
            </div>
            <br />
            <div href="/id" className="hover:text-red-700 ">
              Ανταλλακτικά
            </div>
            <br />
            <div href="/id" className="hover:text-red-700 ">
              Έλεγχος ΚΤΕΟ
            </div>
            <br />
            <div href="/id" className="hover:text-red-700 ">
              Κάρτα Καυσαερίων
            </div>
            <br />
            <div href="/id" className="hover:text-red-700 ">
              Γενικές Εργασίες
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}

export default Servicecard;
