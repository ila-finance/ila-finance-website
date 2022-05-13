import { proxy } from "valtio";
import { devtools } from "valtio/utils";


interface State {
  placeHolder: any;
}

const state = proxy<State>({
    placeHolder: null,
});

devtools(state);

export default state;