const getContectData = () => {
  const main = app ? app : document.querySelector("#app");
  const route = main.__vue__.$route;
  const matched = route.matched[2];
  const instance = matched.instances.default;
  const contact = instance.contact;
  const user = main.__vue__.user;

  return { contact, user };
};

export default getContectData;
