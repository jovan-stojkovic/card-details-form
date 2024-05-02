import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ setCardName, setCardNumber, setDateMM, setDateYY, setCvc }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter your full name"),
    number: yup
      .string()
      .required("Please enter your card number")
      .min(12, "Wrong format, minimum of 12 digits")
      .max(16, "Wrong format, maximum of 16 digits"),
    month: yup
      .number("Wrong format, numbers only")
      .required("Please enter your exp. date")
      .min(1, "Please enter a valid month number")
      .max(12, "Please enter a valid month number"),
    year: yup
      .number("Wrong format, numbers only")
      .required("Please enter your exp. date")
      .min(24, "Please enter a valid year number")
      .max(30, "Please enter a valid year number"),
    cvc: yup
      .string()
      .required("Please enter your CVC")
      .length(3, "Wrond format, CVC has 3 digits"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="div">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          {...register("name")}
          onChange={(e) => setCardName(e.target.value)}
        />
        <p className="error">{errors.name?.message}</p>
      </div>
      <div className="div">
        <label htmlFor="number">CARD NUMBER</label>
        <input
          type="text"
          className="inp-num"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register("number")}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <p className="error">{errors.number?.message}</p>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <label htmlFor="date">EXP. DATE (MM/YY)</label>
          <div className="date">
            <input
              type="number"
              className="inp-num"
              id="date"
              placeholder="MM"
              {...register("month")}
              onChange={(e) => setDateMM(e.target.value)}
            />
            <input
              type="number"
              className="inp-num"
              placeholder="YY"
              {...register("year")}
              onChange={(e) => setDateYY(e.target.value)}
            />
          </div>
          <p className="error">
            {errors.month?.message || errors.year?.message}
          </p>
        </div>
        <div className="bottom-right">
          <label htmlFor="cvc">CVC</label>
          <input
            type="number"
            className="inp-num"
            id="cvc"
            placeholder="e.g. 123"
            {...register("cvc")}
            onChange={(e) => setCvc(e.target.value)}
          />
          <p className="error">{errors.cvc?.message}</p>
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Form;
