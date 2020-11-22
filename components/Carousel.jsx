import { useState } from "react";

function Carousel() {
  const [index, setIndex] = useState(0);

  function inc() {
    setIndex(index > 2 ? 0 : index + 1);
  }
  // It increses the index and when index>2 become 0

  function dec() {
    setIndex(index < 1 ? 3 : index - 1);
  }
  // It decreases the index and when index<1 become 3

  console.log(index);
  return (
    <div className="containerCarousel ">
      <img
        className={`absolute top-0 left-0 ${
          index === 0 ? "opacity-100" : "opacity-0"
        } `}
        // When index=0 opasity is 1 otherwise opasity 0
        src="https://s.nbst.gr/files/1/2015/06/ecot1-320x200.jpg"
        alt="image-1"
        width="800px"
        height="600px"
      />
      <img
        className={`absolute top-0 left-0 ${
          index === 1 ? "opacity-100" : "opacity-0"
        } `}
        src="https://st3.depositphotos.com/2234518/17534/i/1600/depositphotos_175348476-stock-photo-car-mechanic-workshop.jpg"
        alt="image-2"
        width="800px"
        height="600px"
      />
      <img
        className={`absolute top-0 left-0 ${
          index === 2 ? "opacity-100" : "opacity-0"
        } `}
        src="https://i.pinimg.com/originals/3d/2e/c3/3d2ec36570a6c0d386032b6610ee1dfc.jpg"
        alt="image-3"
        width="800px"
        height="600px"
      />
      <img
        className={`absolute top-0 left-0 ${
          index === 3 ? "opacity-100" : "opacity-0"
        } `}
        src="https://www.autogreeknews.gr/wp-content/uploads/2018/01a4ad752c63ab97b29f78948c665173a3_XL.jpg"
        alt="image-4"
        width="900"
        height="600"
      />
      <img
        onClick={() => inc()}
        className="arrowRight"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEX///+AgIB8fHz8/Pzn5+fCwsK9vb2FhYWgoKD4+PjT09Pt7e2bm5uSkpKMjIzc3NzMzMy3t7eoqKiurq7pKnCpAAAEMklEQVR4nO3di3KqQBAEUF5qABUx//+vl1SigizIQt/anmb7A1Ke2t2ZyGNMElzqIgf+NcLU9/QmTazvWZoehIn1VwfsiKE/x39L8QvUJT6B6UmTWJzTZySJzSVLeznKlZs3YEcsQ38kbEbArtxIER1ArY3aXB1ApdZfuVbwp6KqrGJ1cfp0iNV1CqhxFvPq5N6iD6L5ilqd5nwCxNsnoPWNugBom7gIaJm4EGi3aSwFWl3F/LbYl6aZwYrqBUwtNo2DH9DeRvUGGiPmh+VFxiRxHdBQ01gJtEMsj7NfJuaSmSBuAKYmLk9tAxq4dpNvBHYVNTRhPuVxoy8lv21TttuBXUUNzZgOBMhMLNutZ/AR0qZRw4Cs3zS+cUDOppGfkULKpvG6iQ0JY9PAEilvhBfQjUpJrMFEwnKDJVJ+00ATGVcRXFEJibFpeIayou6BuIO++AUUcpabHVTUHfTF2DQi8T2UFRXcNG6hPY7EpuEbxrdtwE2DkRgrqm8Yyw24aURikGAr6g6IlBUVfB1VfxUpibFpeGYHq0hJ3MFZRBMZm0Yk+hJDexzZAXEHFRVLvDISsRv1WoX2OIK9Ake5UWPT8CaG9jgCJjKeRWhFzfSJnBUVe9uGkghtGpl+ueE8i9ArcBnlRsVW1B0QKTfqHlZRv2lEol92sFEjMVAaLLEJ7XEES7xQEicmuq1LJIZJMzm2bkVIyw1yFUnLTSRG4huRstxU7jmnK8NJnB8jKUGcGwXqG86z+HFWpheRchU9JvVZJZ4/f3AP4j00Zxz5bYotNYTARh8I7YdFaM8o8v+2RWAEkgOLCIzAXgiB0EvC8kDKLap+3wILvPBdDAYD1VdQfYsy3sfHAhnPIPR5Gnkg4xlUfyJK/tlENJDupQTwM8J8K6jfB9Wf1Zd/dBb8FiIfUH6IhPy7a/JvrslPcZN/1TkCrQNjm/AEircJwoFY+n0wAiOwHz4gusiE9owiP6hVfkK7PDBWUT8g3yRh+TYhPwta/kcg5Kuo/Fx98NclvjOIbhN0K1jc5c+g+I92ooHyK0j3O4jgNsEIhFZRwi0KraLyQMYiE4HGgaV6myjvSB8hUH6L6reJb+gKtnzAFunL+FYwaZErmPGtYJIckY8b8lXRLiWOyAlEEkmBSZIfQUDCM/iXHFJOiYHdRt1OZGwT/eRbzyJlmxhkY7lhraL9bCJaAG4iZq0F4JamQX8GH8mP62Y9mQF2xIM48IfofRb528Qw3qtopci84km00SaG8SJaBCZeExDJ/xedzFIi4VW1pVlItAtcRmT/uvQhC4i2gQuINqtoL/ltdvix0TYxzOxEUutb9DfTRMNtYphqatycCnBq1rrxNjGMc7asEtA5ulOhivYzIqoBR0Q94PCXZGTaxDCvVRQF9sawqgKfRF3g39gPxSLzSkfUBnbEihH4D7csV88jLLWoAAAAAElFTkSuQmCC"
      />

      <img
        onClick={() => dec()}
        className="arrowLeft"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEX///+5ubm2trbj4+Ozs7PGxsbLy8v4+Pj19fXm5ubW1tb8/PzQ0NDa2tru7u7Z8wL4AAACbUlEQVR4nO3dAU7CQBBG4e5SEQp6/+MqmqhosbM7ITv/8N4J5sukdNOkdJqIiIiIiNo7HZfzsjuMHuN+vdSP5v1p9CR36qmWz2rJucYv4MWYkfgTmJJ4DUxI/A1MR/wLTEZcA6YirgPfy0K8CcyyxdvAJFv8F1jK8+j53G0A9YmbQHWiAahNNAGViUagLtEMVCU2ADWJTUBFYiNQj9gMVCN2AEtRegLXBSxl9Nj2OoF1GT24tU6gzhL7gfPr6NlN9QNL3Y0e3pIDqCH0AEs9jh5/Oxew1Ph3RCdwP3r+zXzAMoc/t3mB4a9CLzD8DylAgMEDCDB4AAEGD6A6cJ8dyAbVgWxQHcgGAQYPIMDgAQQYPIAAgwcQYPAAAgweQIDBAwgweAABBg8gwOABBBg8gACDBxBg8AACDB5AdeCSHXickwMnl08BeHCtUAA47VzvYQsAXcJ6Hj29pfw7zH8d5v8tfYD74XTOfqZ5gHMpRIgQowQRIsQYQYQIMUYQIUKMEUSIEGMEESLEGEGECDFGECFCjBFEiBBjBBEixBhBzEBM/x+0bDEHkS1ChBgjiBAhxggiRIgxggjxIYjhvyXrJx5GA7ZzftP5afT8hpzE8B91nh7g2+o+osQb7y6iiNBBnF9Hz26snzh6cnOdxLqMHtxeJ3H02C11ERXuht91ELWAHUQ1YDNRD9hIVAQ2ETWBDURVoJmoCzQSlYEmojbQQFQHbhL1gRtEgcdrhm4TJR49WbpJzLHBS+vEmge4TkwFXCMmA/4lpgP+JiYEXhNTAn8Qa6LbxHUv9bP9afQk9+u4nJddloMMEREREdl6A8bnNipAxjdwAAAAAElFTkSuQmCC"
      />
    </div>
  );
}

export default Carousel;
