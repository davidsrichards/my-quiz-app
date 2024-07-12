import mongoose from "mongoose";

///// creating new strategy

const DiscordStrategy = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
  },
  discordId: {
    type: mongoose.Schema.Types.String,
  },
});

export const Discord = mongoose.model("Discord", DiscordStrategy);
