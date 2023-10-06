import moment from "moment/moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center space-y-4 my-10">
      <img className="mx-auto" src={logo} alt="the dragon news" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium">
        {moment().format("dddd, MMMM DD , YYYY ")}
      </p>
    </div>
  );
};

export default Header;
