initSidebarItems({"enum":[["ChannelMessage","A message received by a [crate::ChannelActor]."]],"struct":[["ChannelActor","Actor representing a channel, responsible for receiving messages from players and broadcasting them to all connected players."],["CreateChannelMessage","Tells the server to create a new channel and return its unique name."],["GetChannelMessage","Actix message to request the address of a channel by name. Returns the address of a [ChannelActor] if the channel exists."],["PlayerActor","Actor which owns the connection to the client WebSocket connection."],["ServerActor","Responds to messages from the player which are not directed to a specific channel. players initially negotiate with the [ServerActor] to get the right address of the desired channel (and possibly create a new one) before they are connected to it."],["ServerBuilder","Builder for creating a server from a [StateProgram]."],["WrappedStateUpdateMessage","A [StateUpdateMessage], wrapped in a new struct so that we can implement actix’s [Message] trait on it."]]});