// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS = {
  app: "/app",
  home: "/",
};

export const PATH_APP = {
  root: ROOTS.app,

  app: {
    logoView: path(ROOTS.app, "/logo-view"),
  },
};
