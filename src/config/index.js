/**
 * Created by y1205 on 2016/12/15.
 */
import amChartsBars from '../pages/component/desktop/am-charts-bars'
import amChartsDoughnut from '../pages/component/desktop/am-charts-doughnut'
import amChartsGauge from '../pages/component/desktop/am-charts-gauge'
import amChartsLine from '../pages/component/desktop/am-charts-line'
import switcher from '../pages/component/desktop/switcher'
import table from '../pages/component/desktop/table'
import cookieHelper from '../pages/component/desktop/cookie-helper'
import pager from '../pages/component/desktop/pager'
import scrollTo from '../pages/component/desktop/scroll-to'
import checkbox from '../pages/component/desktop/checkbox'
import radioGroup from '../pages/component/desktop/radio-group'
import autoComplete from '../pages/component/desktop/autoComplete'
import rangeSlider from '../pages/component/desktop/range-slider'
import datePicker from '../pages/component/desktop/date-picker'
import numberStepper from '../pages/component/desktop/number-stepper'
import searchFilter from '../pages/component/desktop/search-filter'
import select from '../pages/component/desktop/select'
import loading from '../pages/component/desktop/loading'
import modal from '../pages/component/desktop/modal'
import steps from '../pages/component/desktop/steps'
import tree from '../pages/component/desktop/tree'
import transfer from '../pages/component/desktop/transfer'
import statusMessage from '../pages/component/desktop/status-message'
import tooltip from '../pages/component/desktop/tooltip'
import dropdown from '../pages/component/desktop/dropdown'
import tab from '../pages/component/desktop/tab'
import breadcrumbs from '../pages/component/desktop/breadcrumbs'
import form from '../pages/component/desktop/form'
import calendar from '../pages/component/desktop/calendar'
import tag from '../pages/component/desktop/tag'
import badge from '../pages/component/desktop/badge'
import rate from '../pages/component/desktop/rate'
import editor from '../pages/component/desktop/editor'
import color from '../element/color'
import typography from '../element/typography'
import typesetting from '../element/typesetting'
import layouts from '../element/layouts'
import iconImages from '../element/icons-images'
import lists from '../element/lists'
import input from '../element/input-element'
import controls from '../element/controls'
import buttons from '../element/buttons'
import atomsLoading from '../element/loading'
import typeHeadings from '../element/molecule-headers'
import structure from '../element/molecule-structure'
import feedbackMessages from '../element/molecule-feedback'
import shop from '../element/molecule-shop'
import products from '../element/molecule-products'
import tables from '../element/molecule-tables'
import tabsWidgets from '../element/molecule-tabs'
import modalBox from '../element/molecule-modal'
import upload from '../element/molecule-upload'
import step from '../element/molecule-step'
import charts from '../element/organisms-charts'
import selfare from '../element/organisms-selfcare'
import globalModules from '../element/organisms-global'
import menu from '../element/organisms-menu'
import dataTable from '../element/organisms-data-table'
import formExamples from '../element/page-form'
import principle from '../pages/design/principle.vue'
import workflow from '../pages/design/workflow.vue'
import sitemap from '../pages/telenor/content.vue'
import download from '../pages/assets/download.vue'
import js from '../pages/assets/js.md'
import css from '../pages/assets/css.vue'

import agentView from '../pages/telenor/catalog/av.vue'
import cm from '../pages/telenor/catalog/cm.vue'
import rm from '../pages/telenor/catalog/rm.vue'
import eshop from '../pages/telenor/catalog/eshop.vue'

import developGuide from '../pages/guide/develop-guide.md'
import developFAQ from '../pages/faq/develop-faq.md'

// 移动端
import mobiCell from '../pages/component/mobile/cell'
import mobiCellSwipe from '../pages/component/mobile/cell-swipe'
import mobiSearch from '../pages/component/mobile/search'
import mobiSpinner from '../pages/component/mobile/spinner'
import mobiTabContainer from '../pages/component/mobile/tab-container'
import mobileDemo from '../pages/component/mobile/demo'
import mobileHeader from '../pages/component/mobile/header'
import mobileNavbar from '../pages/component/mobile/navbar'
import mobileTabbar from '../pages/component/mobile/tabbar'
import mobileButton from '../pages/component/mobile/button'
import mobilePaletteButton from '../pages/component/mobile/palette-button'
import mobileSwitch from '../pages/component/mobile/switch'
import mobileChecklist from '../pages/component/mobile/checklist'
import mobileRadio from '../pages/component/mobile/radio'
import mobileField from '../pages/component/mobile/field'
import mobileBadge from '../pages/component/mobile/badge'
import mobileToast from '../pages/component/mobile/toast'
import mobileIndicator from '../pages/component/mobile/indicator'
import mobilePullDown from '../pages/component/mobile/pull-down'
import mobileInfiniteScroll from '../pages/component/mobile/infinite-scroll'
import mobileMessageBox from '../pages/component/mobile/message-box'
import mobileActionSheet from '../pages/component/mobile/action-sheet'
import mobilePopup from '../pages/component/mobile/popup'
import mobileSwipe from '../pages/component/mobile/swipe'
import mobileLazeLoad from '../pages/component/mobile/lazy-load'
import mobileRange from '../pages/component/mobile/range'
import mobileProgress from '../pages/component/mobile/progress'
import mobilePicker from '../pages/component/mobile/picker'
import mobileDatetimePicker from '../pages/component/mobile/datetime-picker'

let deliveryPage = sitemap
let svnAddress = sitemap
let taurus = {
  'component': {
    'am-charts-bars': amChartsBars,
    'am-charts-doughnut': amChartsDoughnut,
    'am-charts-gauge': amChartsGauge,
    'am-charts-line': amChartsLine,
    'autoComplete': autoComplete,
    'checkbox': checkbox,
    'radio-group': radioGroup,
    'breadcrumbs': breadcrumbs,
    'cookie-helper': cookieHelper,
    'date-picker': datePicker,
    'drop-down': dropdown,
    'loading': loading,
    'modal-box': modal,
    'form': form,
    'number-stepper': numberStepper,
    'pager': pager,
    'range-slider': rangeSlider,
    'scroll-to': scrollTo,
    'search-filter': searchFilter,
    'select': select,
    'status-message': statusMessage,
    'switcher': switcher,
    'tab': tab,
    'table': table,
    'tooltip': tooltip,
    'steps': steps,
    'tree': tree,
    'transfer': transfer,
    'calendar': calendar,
    'tag': tag,
    'badge': badge,
    'rate': rate,
    'editor': editor
  },
  'design': {
    principle,
    workflow
  },
  'case': {
    sitemap,
    deliveryPage,
    svnAddress,
    eshop,
    agentView,
    cm,
    rm
  },
  'assets': {
    download,
    js,
    css
  },
  'element': {
    color,
    typography,
    typesetting,
    layouts,
    iconImages,
    lists,
    input,
    controls,
    buttons,
    atomsLoading,
    typeHeadings,
    structure,
    feedbackMessages,
    shop,
    products,
    tables,
    tabsWidgets,
    modalBox,
    upload,
    step,
    charts,
    selfare,
    globalModules,
    menu,
    dataTable,
    formExamples

  },
  'guide': {
    developGuide
  },
  'faqs': {
    developFAQ
  }
}

let mobile = {
  'component': {
    'cell': mobiCell,
    'cell-swipe': mobiCellSwipe,
    'search': mobiSearch,
    'spinner': mobiSpinner,
    'tab-container': mobiTabContainer,
    'mobile-demo': mobileDemo,
    'header': mobileHeader,
    'navbar': mobileNavbar,
    'tabbar': mobileTabbar,
    'button': mobileButton,
    'palette-button': mobilePaletteButton,
    'switch': mobileSwitch,
    'checklist': mobileChecklist,
    'radio': mobileRadio,
    'field': mobileField,
    'badge': mobileBadge,
    'toast': mobileToast,
    'indicator': mobileIndicator,
    'pull-down': mobilePullDown,
    'infinite-scroll': mobileInfiniteScroll,
    'message-box': mobileMessageBox,
    'action-sheet': mobileActionSheet,
    'popup': mobilePopup,
    'swipe': mobileSwipe,
    'lazy-load': mobileLazeLoad,
    'range': mobileRange,
    'progress': mobileProgress,
    'picker': mobilePicker,
    'datetime-picker': mobileDatetimePicker
  },
  'design': {
    principle,
    workflow
  },
  'case': {
    sitemap,
    deliveryPage,
    svnAddress,
    eshop,
    agentView,
    cm,
    rm
  },
  'assets': {
    download,
    js,
    css
  },
  'element': {
    color,
    typography,
    typesetting,
    layouts,
    iconImages,
    lists,
    input,
    controls,
    buttons,
    atomsLoading,
    typeHeadings,
    structure,
    feedbackMessages,
    shop,
    products,
    tables,
    tabsWidgets,
    modalBox,
    upload,
    step,
    charts,
    selfare,
    globalModules,
    menu,
    dataTable,
    formExamples

  },
  'guide': {
    developGuide
  },
  'faqs': {
    developFAQ
  }
}
export default {
  'desktop': taurus,
  'mobile': mobile
}
