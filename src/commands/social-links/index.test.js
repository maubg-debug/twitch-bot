import socialLinks from "./index";

const links = {
  github: "https://github.com",
  twitch: "https://twitch.tv/maubg"
};

test("Get github link", () => {
  expect(socialLinks("github")).toStrictEqual({
    sendMessage: true,
    message: links.github
  });
});

test("Get Twitch link", () => {
  expect(socialLinks("twitch")).toStrictEqual({
    sendMessage: true,
    message: links.twitch
  });
});
