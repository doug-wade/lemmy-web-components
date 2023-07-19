import { mount } from "@tybalt/test-utils";
import LemmyThread from "./lemmy-thread";

describe("LemmyThread", () => {
  it("renders", async () => {
    const mockName = "World";
    const wrapper = await mount(LemmyThread, {
      attributes: { name: mockName },
    });

    expect(wrapper.html()).toContain(`Hello ${mockName}`);
  });
});
