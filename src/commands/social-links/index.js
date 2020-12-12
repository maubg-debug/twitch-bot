export default social => {
  const links = {
    github: "https://github.com/maubg-debug/twitch-bot",
    twitch: "https://twitch.tv/maubg"
  };

  switch (social) {
    case "github":
      return { sendMessage: true, message: links.github };
    case "twitch":
      return { sendMessage: true, message: links.twitch };
    default:
      break;
  }
};
