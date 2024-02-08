export default function compute(
    firstString,
    secondString,
    constrained,
    constraintString,
    setOutput
) {
    if (!firstString || !secondString) {
        return;
    } else if (constrained && !constraintString) {
        return;
    }

    if (constrained) {
        let m = firstString.length;
        let n = secondString.length;
        let r = constraintString.length;

        let M = new Array(m + 1)
            .fill(0)
            .map(() =>
                new Array(n + 1).fill(0).map(() => new Array(r + 1).fill(0))
            );

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (firstString.charAt(i - 1) === secondString.charAt(j - 1)) {
                    M[i][j][0] = M[i - 1][j - 1][0] + 1;
                } else {
                    M[i][j][0] = M[i - 1][j][0];
                }
            }
        }

        for (let j = 0; j <= n; j++) {
            for (let k = 1; k <= r; k++) {
                M[0][j][k] = -100 * (m + n);
            }
        }

        for (let i = 0; i <= m; i++) {
            for (let k = 1; k <= r; k++) {
                M[i][0][k] = -100 * (m + n);
            }
        }

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                for (let k = 1; k <= r; k++) {
                    if (
                        firstString.charAt(i - 1) === secondString.charAt(j - 1)
                    ) {
                        if (
                            firstString.charAt(i - 1) ===
                            constraintString.charAt(k - 1)
                        ) {
                            M[i][j][k] = M[i - 1][j - 1][k - 1] + 1;
                        } else {
                            M[i][j][k] = M[i - 1][j - 1][k] + 1;
                        }
                    } else {
                        M[i][j][k] = M[i - 1][j][k];
                    }
                }
            }
        }

        let maxLength = 0;
        let lastIndexOnY = n;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (M[i][j][r] > maxLength) {
                    maxLength = M[i][j][r];
                    lastIndexOnY = j;
                }
            }
        }

        const result = secondString.substring(
            lastIndexOnY - maxLength,
            lastIndexOnY
        );

        result
            ? setOutput(
                  `The longest string which is a subsequence of "${firstString}", a substring of "${secondString}", and has "${constraintString}" as a subsequence is "${result}".\n\nIt's length is ${result.length}.`
              )
            : setOutput(
                  "Sorry we could not find a result with the inputted strings."
              );
    } else {
        let m = firstString.length;
        let n = secondString.length;
        let W = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));
        let maxLength = 0;
        let lastIndexOnSecondString = n;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (firstString.charAt(i - 1) === secondString.charAt(j - 1)) {
                    W[i][j] = W[i - 1][j - 1] + 1;
                } else {
                    W[i][j] = W[i - 1][j];
                }
                if (W[i][j] > maxLength) {
                    maxLength = W[i][j];
                    lastIndexOnSecondString = j;
                }
            }
        }
        const result = secondString.substring(
            lastIndexOnSecondString - maxLength,
            lastIndexOnSecondString
        );

        result
            ? setOutput(
                  `The longest string which is a subsequence of "${firstString}" and a substring of "${secondString}" is "${result}".\n\nIt's length is ${result.length}.`
              )
            : setOutput(
                  "Sorry we could not find a result with the inputted strings."
              );
    }
}
