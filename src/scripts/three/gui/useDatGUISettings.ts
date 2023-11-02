import { IUseDatGUIFolderProps, useDatGUIFolder } from './useDatGUIFolder';

type TNumber = {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
};

type TBoolean = {
  type: 'boolean';
};

type TColor = {
  type: 'color';
};

type TSetting = TNumber | TBoolean | TColor;

export interface IUseDatGUISettingsProps<T>
  extends Pick<IUseDatGUIFolderProps, 'name' | 'isOpen'> {
  /** Source object */
  source: T;
  /** Changeable properties */
  controls: ({ name: keyof T } & TSetting)[];
  /** @default 16 */
  debounceDelay?: number;
  /** Event on settings change */
  onChange?: (object: T) => void;
}

/** Create dat.gui settings */
export function useDatGUISettings<T extends object>({
  source,
  controls,
  debounceDelay = 16,
  onChange,
  ...props
}: IUseDatGUISettingsProps<T>) {
  const settings = source;

  let updateTimeout: NodeJS.Timeout | undefined;

  // const callbacks = new Callbacks<{ update: T }>();

  const onSettingsUpdate = () => {
    if (updateTimeout) {
      clearTimeout(updateTimeout);
    }

    updateTimeout = setTimeout(() => {
      onChange?.(settings);
      // callbacks.tbt('update', settings);
    }, debounceDelay);
  };

  const guiFolder = useDatGUIFolder({
    ...props,
    onCreate: (folder) => {
      controls.forEach((setting) => {
        if (setting.type === 'number') {
          return folder
            .add(source, setting.name, setting.min, setting.max, setting.step)
            .onChange(onSettingsUpdate);
        }

        if (setting.type === 'boolean') {
          return folder.add(source, setting.name).onChange(onSettingsUpdate);
        }

        if (setting.type === 'color') {
          return folder
            .addColor(source, setting.name as string)
            .onChange(onSettingsUpdate);
        }

        return undefined;
      });
    }
  });

  const destroy = () => {
    guiFolder.destroy();
  };

  return {
    settings,
    destroy
    // callbacks,
  };
}
