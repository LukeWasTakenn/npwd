import Default from '../default.json';
import { atom, useRecoilState } from 'recoil';
import useLocalStorage from '../../os/phone/hooks/useLocalStorage';

const configState = atom({
  key: 'config',
  default: Default,
});

export const useConfig = (state: any = configState): any => {
  const [, setVal] = useLocalStorage();
  const [config, _setConfig] = useRecoilState(state);

  const setConfig = (key, value) => {
    console.log(`setConfig: ${key} ${value}`);
    setVal(key, value);
  };

  return [config, setConfig];
};
