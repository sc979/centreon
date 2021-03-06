<?php

/*
 * Copyright 2005 - 2021 Centreon (https://www.centreon.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * For more information : contact@centreon.com
 *
 */
declare(strict_types=1);

namespace Tests\Centreon\Domain\MetaServiceConfiguration\Exception;

use Centreon\Domain\MetaServiceConfiguration\Exception\MetaServiceConfigurationException;
use PHPUnit\Framework\TestCase;

/**
 * @package Tests\Centreon\Domain\HostConfiguration\Exceptions
 */
class MetaServiceConfigurationExceptionTest extends TestCase
{
    /**
     * Tests the arguments of the static method findM.
     */
    public function testFindMetaServicesConfigurations(): void
    {
        $previousMessage1 = 'Error message 1';
        $errorMessage = 'Error when searching for the meta services configurations';

        $exception = MetaServiceConfigurationException::findMetaServicesConfigurations(
            new \Exception($previousMessage1)
        );
        self::assertEquals(sprintf($errorMessage), $exception->getMessage());
        self::assertNotNull($exception->getPrevious());
        self::assertEquals($previousMessage1, $exception->getPrevious()->getMessage());
    }

    /**
     * Tests the arguments of the static method findOneMetaServiceConfiguration.
     */
    public function testFindOneMetaServiceConfiguration(): void
    {
        $previousMessage1 = 'Error message 1';
        $errorMessage = 'Error when searching for the meta service configuration (%s)';

        $exception = MetaServiceConfigurationException::findOneMetaServiceConfiguration(
            new \Exception($previousMessage1),
            1
        );
        self::assertEquals(sprintf($errorMessage, 1), $exception->getMessage());
        self::assertNotNull($exception->getPrevious());
        self::assertEquals($previousMessage1, $exception->getPrevious()->getMessage());
    }

    /**
     * Tests the arguments of the static method findOneMetaServiceConfigurationNotFound.
     */
    public function testFindOneMetaServiceConfigurationNotFound(): void
    {
        $errorMessage = 'Meta service configuration (%s) not found';

        $exception = MetaServiceConfigurationException::findOneMetaServiceConfigurationNotFound(1);
        self::assertEquals(sprintf($errorMessage, 1), $exception->getMessage());
    }
}
