// Avatar.js
function Avatar({ person, size }) {
    return (
      <div>
        <img
          className="avatar"
          src={`https://i.imgur.com/${person.imageId}.jpg`}
          alt={person.name}
          width={size}
          height={size}
        />
        <h2>{person.name}</h2>
      </div>
    );
  }
  
  export default Avatar;
  