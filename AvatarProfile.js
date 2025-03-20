//Komponenti Parent (AvatarProfile) krijon një objekt person dhe e përdor këtë objekt për të kaluar të dhënat te komponenti Avatar.

function AvatarProfile() {
    const person = {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2'
    };
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs">
        <img
          className="rounded-full mx-auto mb-4"
          src={`https://i.imgur.com/${person.imageId}.jpg`}
          alt={person.name}
          width={150}
          height={150}
        />
        <h2 className="text-center text-xl font-semibold">{person.name}</h2>
      </div>
    );
  }
  
  export default AvatarProfile;
  