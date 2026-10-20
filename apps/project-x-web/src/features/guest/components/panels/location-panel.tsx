
import { Button, Container, Select, Text } from '@repo/ui'
import { FilterPanel } from './filter-panel'
import { CheckIcon } from '@repo/icons'

export const LocationPanel = () => {
    return (
        <FilterPanel>
            <Text variant="h5" tone='primary'>
                Select a Location
            </Text>
            <Container className='mt-4 flex flex-col'>
                <Select className='bg-background!' placeholder='State' label='' />
                <Select className='bg-background!' placeholder='Local Government Area' label='' />
                <Select className='bg-background!' placeholder='Area/Neighborhood' label='' />
            </Container>
            <Button rightIcon={<CheckIcon className='text-inverted' size={20} />} className='w-full' variant='secondary'>
                Apply
            </Button>
        </FilterPanel>
    )
}
