import { GUI, datGUI } from './gui';

export interface IUseDatGUIFolderProps {
  name: string;
  onCreate: (folder: GUI) => void;
  isOpen?: boolean;
}

export function useDatGUIFolder({
  name,
  isOpen,
  onCreate
}: IUseDatGUIFolderProps) {
  const isDestroyed = false;
  let folder: GUI | undefined;
  let instance: GUI | null = null;

  datGUI
    .then((result) => {
      instance = result;

      if (isDestroyed || !instance) {
        return;
      }

      folder = instance.addFolder(name);

      if (isOpen) {
        folder.open();
      }

      onCreate(folder);
    })
    .catch(() => {});

  const destroy = () => {
    if (folder) {
      instance?.removeFolder(folder);
    }
  };

  return { destroy };
}
