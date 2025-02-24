// Calcutate the vertical velocity of the ball
export function calculateY(time, GRAVITY, coefficientOfRestitution = 1) {
  const y = 0.5 * coefficientOfRestitution * GRAVITY * time ** 2;
  return y;
}
