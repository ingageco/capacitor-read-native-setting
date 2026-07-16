import { WebPlugin } from '@capacitor/core';
import { CapacitorReadNativeSettingPlugin } from './definitions';

export class CapacitorReadNativeSettingWeb extends WebPlugin implements CapacitorReadNativeSettingPlugin {
  async read(args: { key: string }): Promise<any> {
    console.log('ARGS', args);
    return Promise.resolve();
  }
}

const CapacitorReadNativeSetting = new CapacitorReadNativeSettingWeb();

export { CapacitorReadNativeSetting };
