type userProps = {
  lang: string[];
};
const User = ({ lang }: userProps) => {
  return (
    <div>
      {lang.map((language, index) => {
        return <span key={index}>{language}</span>;
      })}
    </div>
  );
};

export default User;
