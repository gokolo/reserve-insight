import { shallowMount } from '@vue/test-utils'
import CountriesInsightCard from '@/components/CountriesInsightCard.vue'

describe('CountriesInsightCard.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CountriesInsightCard, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
