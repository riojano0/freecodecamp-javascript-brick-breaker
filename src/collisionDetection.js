export function detectCollision(ball, gameObject) {

        //Check collision with Game Object
        let bottomOfBall = ball.position.y + ball.size;
        let topOfBall = ball.position.y;
        let topOfGameObject = gameObject.position.y;
        let bottomOfGameObject = gameObject.position.y + gameObject.height;
        let leftSideOfGameObject = gameObject.position.x;
        let rightSideOfGameObject = gameObject.position.x + gameObject.width;

    if (
        bottomOfBall >= topOfGameObject
        && topOfBall <= bottomOfGameObject
        && ball.position.x >= leftSideOfGameObject
        && ball.position.x + ball.size <= rightSideOfGameObject
    ) {
        // ball.speed.y = -ball.speed.y;
        // ball.position.y = gameObject.position.y - ball.size;
        return true;
    } else {
        return false;
    }
}