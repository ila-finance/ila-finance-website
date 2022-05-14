import { proxy } from "valtio";
import { devtools } from "valtio/utils";


interface State {
  emailAnalysis: any;
}

const state = proxy<State>({
  emailAnalysis: null,
});

devtools(state);

export default state;