@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ObjectOptimisticLockingFailureException.class)
    public ResponseEntity<String> handleConcurrencyConflict(ObjectOptimisticLockingFailureException ex) {
        // This is the "Else" condition triggered by the database
        // Instead of a crash, we return a meaningful response
        return ResponseEntity.status(HttpStatus.CONFLICT)
                             .body("The auction price was updated by another user. Please refresh and try again.");
    }
}