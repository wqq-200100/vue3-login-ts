import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElButton,
  ElTable,
  ElBacktop,
  ElTabPane,
  ElTabs,
  ElForm,
  ElFormItem,
  ElIcon,
  ElRadio,
  ElInput
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElBacktop,
  ElTabPane,
  ElTabs,
  ElForm,
  ElFormItem,
  ElIcon,
  ElRadio,
  ElInput
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}