import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";
import userEvent from "@testing-library/user-event";

test("Clicking the button toggles the display between ON and OFF.", async () => {
    const user = userEvent.setup()
    render(<SimpleButton />);
    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("OFF");
    await user.click(simpleButton); // userEvent.click(simpleButton)が実行されるまで待機
    expect(simpleButton).toHaveTextContent("ON");
});

// https://jestjs.io/ja/docs/snapshot-testing
test("As soon as it is drawn, it is marked OFF.", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
});
