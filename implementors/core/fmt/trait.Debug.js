(function() {var implementors = {};
implementors["aper"] = [{"text":"impl&lt;Transition:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/struct.TransitionEvent.html\" title=\"struct aper::TransitionEvent\">TransitionEvent</a>&lt;Transition&gt;","synthetic":false,"types":["aper::transition_event::TransitionEvent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aper/struct.PlayerID.html\" title=\"struct aper::PlayerID\">PlayerID</a>","synthetic":false,"types":["aper::PlayerID"]},{"text":"impl&lt;State:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/trait.StateMachine.html\" title=\"trait aper::StateMachine\">StateMachine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"aper/enum.StateUpdateMessage.html\" title=\"enum aper::StateUpdateMessage\">StateUpdateMessage</a>&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State::<a class=\"type\" href=\"aper/trait.StateMachine.html#associatedtype.Transition\" title=\"type aper::StateMachine::Transition\">Transition</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["aper::StateUpdateMessage"]}];
implementors["aper_yew"] = [{"text":"impl&lt;State:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/state_machine/trait.StateMachine.html\" title=\"trait aper::state_machine::StateMachine\">StateMachine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"aper_yew/enum.Status.html\" title=\"enum aper_yew::Status\">Status</a>&lt;State&gt;","synthetic":false,"types":["aper_yew::Status"]},{"text":"impl&lt;State:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"aper/state_machine/trait.StateMachine.html\" title=\"trait aper::state_machine::StateMachine\">StateMachine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"aper_yew/enum.Msg.html\" title=\"enum aper_yew::Msg\">Msg</a>&lt;State&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;State::<a class=\"type\" href=\"aper/state_machine/trait.StateMachine.html#associatedtype.Transition\" title=\"type aper::state_machine::StateMachine::Transition\">Transition</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["aper_yew::Msg"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()