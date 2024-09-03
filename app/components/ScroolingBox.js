import Image from 'next/image'
import Link from 'next/link'

function ScroolingBox ({ shoe }) {
    return (
        <Link href={`/shoes/${shoe.id}`} className="inline-block h-full" style={{ width: '300px' }}>
            <Image 
                src={shoe.images[0]} 
                alt={shoe.name} 
                width={300} 
                height={300} 
                objectFit="cover"
                className="w-full h-full"
            />
        </Link>
    );
}

export default ScroolingBox;