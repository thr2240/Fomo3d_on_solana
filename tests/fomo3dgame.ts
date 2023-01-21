import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Fomo3dgame } from "../target/types/fomo3dgame";

describe("fomo3dgame", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Fomo3dgame as Program<Fomo3dgame>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
