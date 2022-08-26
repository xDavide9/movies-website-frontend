const pageTransition = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

const zoomInOnHover = {
  whileHover: { scale: 1.1 },
};

export { pageTransition, zoomInOnHover };
