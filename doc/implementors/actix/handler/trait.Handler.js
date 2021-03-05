(function() {var implementors = {};
implementors["aper_actix"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"aper/state_machine/trait.Transition.html\" title=\"trait aper::state_machine::Transition\">Transition</a>, State:&nbsp;<a class=\"trait\" href=\"aper/state_program/trait.StateProgram.html\" title=\"trait aper::state_program::StateProgram\">StateProgram</a>&lt;T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; Handler&lt;<a class=\"enum\" href=\"aper_actix/enum.ChannelMessage.html\" title=\"enum aper_actix::ChannelMessage\">ChannelMessage</a>&lt;T, State&gt;&gt; for <a class=\"struct\" href=\"aper_actix/struct.ChannelActor.html\" title=\"struct aper_actix::ChannelActor\">ChannelActor</a>&lt;T, State&gt;","synthetic":false,"types":["aper_actix::channel_actor::ChannelActor"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"aper/state_machine/trait.Transition.html\" title=\"trait aper::state_machine::Transition\">Transition</a>, State:&nbsp;<a class=\"trait\" href=\"aper/state_program/trait.StateProgram.html\" title=\"trait aper::state_program::StateProgram\">StateProgram</a>&lt;T&gt;&gt; Handler&lt;<a class=\"struct\" href=\"aper_actix/struct.WrappedStateUpdateMessage.html\" title=\"struct aper_actix::WrappedStateUpdateMessage\">WrappedStateUpdateMessage</a>&lt;T, State&gt;&gt; for <a class=\"struct\" href=\"aper_actix/struct.PlayerActor.html\" title=\"struct aper_actix::PlayerActor\">PlayerActor</a>&lt;T, State&gt;","synthetic":false,"types":["aper_actix::player_actor::PlayerActor"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"aper/state_machine/trait.Transition.html\" title=\"trait aper::state_machine::Transition\">Transition</a>, State:&nbsp;<a class=\"trait\" href=\"aper/state_program/trait.StateProgram.html\" title=\"trait aper::state_program::StateProgram\">StateProgram</a>&lt;T&gt;, Factory:&nbsp;<a class=\"trait\" href=\"aper/state_program/trait.StateProgramFactory.html\" title=\"trait aper::state_program::StateProgramFactory\">StateProgramFactory</a>&lt;T, State&gt;&gt; Handler&lt;<a class=\"struct\" href=\"aper_actix/struct.GetChannelMessage.html\" title=\"struct aper_actix::GetChannelMessage\">GetChannelMessage</a>&lt;T, State&gt;&gt; for <a class=\"struct\" href=\"aper_actix/struct.ServerActor.html\" title=\"struct aper_actix::ServerActor\">ServerActor</a>&lt;T, State, Factory&gt;","synthetic":false,"types":["aper_actix::server_actor::ServerActor"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"aper/state_machine/trait.Transition.html\" title=\"trait aper::state_machine::Transition\">Transition</a>, State:&nbsp;<a class=\"trait\" href=\"aper/state_program/trait.StateProgram.html\" title=\"trait aper::state_program::StateProgram\">StateProgram</a>&lt;T&gt;, Factory:&nbsp;<a class=\"trait\" href=\"aper/state_program/trait.StateProgramFactory.html\" title=\"trait aper::state_program::StateProgramFactory\">StateProgramFactory</a>&lt;T, State&gt;&gt; Handler&lt;<a class=\"struct\" href=\"aper_actix/struct.CreateChannelMessage.html\" title=\"struct aper_actix::CreateChannelMessage\">CreateChannelMessage</a>&gt; for <a class=\"struct\" href=\"aper_actix/struct.ServerActor.html\" title=\"struct aper_actix::ServerActor\">ServerActor</a>&lt;T, State, Factory&gt;","synthetic":false,"types":["aper_actix::server_actor::ServerActor"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()