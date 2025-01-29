function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>
      {handleDelete && (
        <button
        onClick={(e) => {
          e.stopPropagation();
          handleDelete();
        }}
      >
        Delete
      </button>
      
      )}
    </div>
  );
}

export default BotCard;
