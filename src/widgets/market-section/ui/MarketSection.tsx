import { Box } from '@mantine/core';
import BuyCards from '@/widgets/buy-cards';

export default function MarketSection() {
    return (
        <Box component="section" pb="var(--thumb-height)">
            <BuyCards mb="md" />
        </Box>
    );
}
