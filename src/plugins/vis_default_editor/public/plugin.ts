/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { CoreSetup, Plugin } from 'kibana/public';

import { VisualizePluginSetup } from '../../visualize/public';
import { DefaultEditorController } from './default_editor_controller';
import { setTheme } from './services';

export interface VisDefaultEditorSetupDependencies {
  visualize: VisualizePluginSetup;
}

export class VisDefaultEditorPlugin
  implements Plugin<void, void, VisDefaultEditorSetupDependencies, {}>
{
  public setup(core: CoreSetup, { visualize }: VisDefaultEditorSetupDependencies) {
    setTheme(core.theme);
    if (visualize) {
      visualize.visEditorsRegistry.registerDefault(DefaultEditorController);
    }
  }

  public start() {}

  stop() {}
}
