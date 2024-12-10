# JavaScript Loose Typing with + Operator

This example demonstrates how JavaScript's loose typing system can lead to unexpected behavior when using the + operator.  When used with strings, the + operator performs string concatenation instead of numerical addition. This can lead to subtle and difficult-to-find errors.

## Bug

The provided JavaScript code showcases how using the + operator with a mix of numbers and strings produces unexpected results. The expected behavior would be numerical addition; however, the loose typing system converts the operands to strings before concatenating them.