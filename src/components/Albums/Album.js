import './albumsSt.css'

const Album = ({album}) => {

  const {userId, id, title}=album
return (
  <div className={'case'}>
      <div>{userId}</div>

      <div>{id}</div>

      <div>{title}</div>
  </div>
);
};

export {Album};