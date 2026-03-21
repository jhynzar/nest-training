import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id: randomUUID(),
            name: 'profile1',
            description: 'profileDescription1',
        },
        {
            id: randomUUID(),
            name: 'profile2',
            description: 'profileDescription2',
        },
        {
            id: randomUUID(),
            name: 'profile3',
            description: 'profileDescription3',
        },
    ];

    findAll() {
        return this.profiles;
    }

    findOne(id: string) {
        const matchingProfile = this.profiles.find((profile) => profile.id === id);

        if (!matchingProfile) {
            throw new NotFoundException(`Profile with ID ${id} not found`);
        }

        return matchingProfile;
    }

    create(createProfileDto: CreateProfileDto) {
        const newProfile = {
            id: randomUUID(),
            ...createProfileDto
        }

        this.profiles.push(newProfile);

        return newProfile;
    }

    update(id: string, updateProfileDto: UpdateProfileDto) {

        let updatedProfile = this.profiles.find((profile) => profile.id === id);

        if (!updatedProfile) {
            throw new NotFoundException(`Profile with ID ${id} not found`);
        }

        updatedProfile.name = updateProfileDto.name;
        updatedProfile.description = updateProfileDto.description;

        return updatedProfile;
    }

    remove(id: string) {
        const matchingIndex = this.profiles.findIndex((profile) => profile.id === id);

        if (matchingIndex < 0) {
            throw new NotFoundException(`Profile with ID ${id} not found`);
        }

        this.profiles.splice(matchingIndex, 1);
    }
}
