import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import events from "@testing-library/user-event";
import { TreeViewer } from "../Components";

describe("App", () => {
  beforeEach(() => {
    render(<TreeViewer />);
  });
  afterEach(() => {
    cleanup();
  });
  it("should display root level by default", async () => {
    const rootNodes = ["base1", "leafBase", "empty"];
    const rootNodesElements = rootNodes.map((node) =>
      screen.getByText(node, { exact: false })
    );
    expect(rootNodesElements.length).toBe(3);
    expect(rootNodesElements[1].innerText).toContain("lb");
  });
  it("should display leaf level when clicked", async () => {
    const rootNode1 = screen.getByText("base1", { exact: false });
    await events.click(rootNode1);
    const leafNodeLevel1 = ["leafNode"];
    screen.getByText(leafNodeLevel1[0], { exact: false });
  });
  it("should delete leaf when clicked", async () => {
    const leaf1 = screen.getByText("leafBase", { exact: false });
    const leafContainer = leaf1.parentElement?.parentElement;
    const optionsButton = leafContainer?.querySelector("button");
    expect(optionsButton).not.toBeNull();
    await events.click(optionsButton!);
    const deleteButton = screen.getByText("delete", { exact: false });
    await events.click(deleteButton);
    expect(screen.queryByText("leafBase", { exact: false })).toBeNull();
  });
});
