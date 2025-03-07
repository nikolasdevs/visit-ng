import AdminHeader from "./component/Header";
import Sidebar from "./component/Sidebar";
//import AdminForm from "./component/AdminForm";

const page = () => {
  return (
    <div>
      <AdminHeader />
      <Sidebar />
      {/* <AdminForm /> */}
    </div>
  );
};

export default page;
