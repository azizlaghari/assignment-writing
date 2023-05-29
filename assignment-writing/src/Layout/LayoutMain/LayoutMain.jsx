import VerticalLayout from "../VerticalLayout/VerticalLayout";

const LayoutMain = ({ children, active }) => {
  return (
    <>
      <div className="main-layout">
        <VerticalLayout children={children} active={active} />
      </div>
    </>
  );
};

export default LayoutMain;
