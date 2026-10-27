import React from 'react'
import { FilterPanel } from './filter-panel'
import { Button, Checkbox, Container, Text } from '@repo/ui'
import { Col, Row } from 'antd'
import { Check } from '@repo/icons'

export const BedroomPanel = () => {
    return (
        <FilterPanel size='large'>
            <Container className='mb-4'>
                <Text variant='h5' tone='primary'>
                    Select number of bedrooms
                </Text>
            </Container>
            <Container>
                <Row gutter={[16, 16]}>
                    <Col lg={8} xs={12}>
                        <Container className='bg-background px-3 py-3.5 flex gap-3 items-center rounded-lg'>
                            <Checkbox checked={false} onChange={() => { }} />
                            <Text variant='action-label' tone='primary'>Any</Text>
                        </Container>
                    </Col>
                </Row>
                <Container className='mt-4'>
                    <Button variant='secondary' rightIcon={<Check size={20} className='text-inverted' />} className='w-full' >
                        Apply
                    </Button>
                </Container>

            </Container>
        </FilterPanel>
    )
}
