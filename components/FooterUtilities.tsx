type footerProps = {
  title: string;
  children: React.ReactNode;
};
const FooterColumn = ({ title, children }: footerProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap"> {title}</h4>
      <p>{children}</p>
    </div>
  );
};
export default FooterColumn;
